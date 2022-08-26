import React, {createContext, useState, ReactNode, useEffect} from 'react';
import {GET_LIST_LIKED_PRODUCT} from '../../constants/apiUrls';
import {Product} from '../../models/Product';
import {mode} from '../../utils/array';
import {
  GetListProduct,
  GetProductTypeProducts,
  GetTotalCountProducts,
} from '../apis/Product/queries';
import {gplQuery} from '../fetchers/grapql';
import {fetcher} from '../fetchers/rest';

type ProductContextData = {
  productLikedIds: string[];
  totalProductCount: number;
  getProductListLikedIds: () => void;
  getProductListCount: () => void;
  getProductList: (isRefresh?: boolean) => void;
  likeProduct: (id: string) => void;
  disLikeProduct: (id: string) => void;
  loadDataShop: () => void;
  loadDataHome: () => void;
  listProduct: Product[];
  listProductFavorite: Product[];
  getListProductFavorite: () => void;
  isLoadingListProduct: boolean;
  isLoadingListProductFavorite: boolean;

  //Home
  getListProductWithMostLikedProductType: () => void;
  listProductWithMostLikedProductType: Product[];
  isLoadingListProductWithMostLikedProductType: boolean;

  getListProductWithMostLikedBrand: () => void;
  listProductWithMostLikedBrand: Product[];
  isLoadingListProductWithMostLikedBrand: boolean;

  getListNewestProducts: () => void;
  listNewestProducts: Product[];
  isLoadingListNewestProducts: boolean;
};

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

type Props = {
  children?: ReactNode;
};
const ProductProvider = ({children}: Props) => {
  const [productLikedIds, setProductLikedIds] = useState<string[]>([]);
  const [skipProduct, setSkipProduct] = useState<number>(0);
  const [totalProductCount, setTotalProductCount] = useState<number>(0);
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [listProductFavorite, setListProductFavorite] = useState<Product[]>([]);
  const [isLoadingListProduct, setIsLoadingListProduct] =
    useState<boolean>(false);
  const [isLoadingListProductFavorite, setIsLoadingListProductFavorite] =
    useState<boolean>(false);
  const [
    listProductWithMostLikedProductType,
    setListProductWithMostLikedProductType,
  ] = useState<Product[]>([]);
  const [
    isLoadingListProductWithMostLikedProductType,
    setIsLoadingListProductWithMostLikedProductType,
  ] = useState<boolean>(false);

  const [listProductWithMostLikedBrand, setListProductWithMostLikedBrand] =
    useState<Product[]>([]);
  const [
    isLoadingListProductWithMostLikedBrand,
    setIsLoadingListProductWithMostLikedBrand,
  ] = useState<boolean>(false);

  const [listNewestProducts, setListNewestProducts] = useState<Product[]>([]);
  const [isLoadingListNewestProducts, setIsLoadingListNewestProducts] =
    useState<boolean>(false);

  const getProductListLikedIds = async () => {
    try {
      const {result} = await fetcher(`${GET_LIST_LIKED_PRODUCT}`, 'GET');
      setProductLikedIds(result);
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  const getProductListCount = async () => {
    try {
      const {productsConnection} = await gplQuery(GetTotalCountProducts);
      setTotalProductCount(productsConnection.aggregate.count);
    } catch (e) {
      console.log(e);
    }
  };

  const getProductList = async (isRefresh = false) => {
    setIsLoadingListProduct(true);
    try {
      const {products} = await gplQuery(GetListProduct, {
        orderBy: 'price_DESC',
        where: {
          price_not: null,
          brand_not: null,
        },
        skip: isRefresh ? 0 : skipProduct,
      });
      setListProduct(
        !isRefresh && skipProduct > 0
          ? [...listProduct, ...products]
          : products,
      );
      setSkipProduct(skipProduct + 10);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingListProduct(false);
    }
  };

  const getListProductFavorite = async () => {
    setIsLoadingListProductFavorite(true);
    try {
      const likedIds = await getProductListLikedIds();
      const {products} = await gplQuery(GetListProduct, {
        where: {
          id_in: likedIds,
          brand_not: null,
        },
      });
      setListProductFavorite(products);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingListProductFavorite(false);
    }
  };

  const likeProduct = async (id: string) => {
    setProductLikedIds([...productLikedIds, id]);
    try {
      const {success} = await fetcher(
        `${GET_LIST_LIKED_PRODUCT}/${id}`,
        'PATCH',
      );
      if (!success) {
        setProductLikedIds(productLikedIds.filter(i => i !== id));
      }
    } catch (e) {
      console.log(e);
      setProductLikedIds(productLikedIds.filter(i => i !== id));
    }
  };

  const disLikeProduct = async (id: string) => {
    setProductLikedIds(productLikedIds.filter(i => i !== id));
    try {
      const {success} = await fetcher(
        `${GET_LIST_LIKED_PRODUCT}/${id}`,
        'DELETE',
      );
      if (!success) {
        setProductLikedIds([...productLikedIds, id]);
      }
    } catch (e) {
      console.log(e);
      setProductLikedIds([...productLikedIds, id]);
    }
  };

  const getListProductWithMostLikedProductType = async () => {
    setIsLoadingListProductWithMostLikedProductType(true);
    try {
      const likedIds = await getProductListLikedIds();
      if (likedIds.length === 0) {
        setIsLoadingListProductWithMostLikedProductType(false);
        return;
      }
      const {products: productsTypeList} = await gplQuery(
        GetProductTypeProducts,
        {
          where: {
            id_in: likedIds,
            brand_not: null,
          },
        },
      );
      const mostLikedProductType = mode(
        productsTypeList.map((p: {productType: string}) => p.productType),
      );
      const {products: productsMostLikedType} = await gplQuery(GetListProduct, {
        where: {
          productType: mostLikedProductType,
          rating_not: null,
          brand_not: null,
        },
        orderBy: 'rating_DESC',
      });
      setListProductWithMostLikedProductType(productsMostLikedType);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingListProductWithMostLikedProductType(false);
    }
  };

  const getListProductWithMostLikedBrand = async () => {
    setIsLoadingListProductWithMostLikedBrand(true);
    try {
      const likedIds = await getProductListLikedIds();
      if (likedIds.length === 0) {
        setIsLoadingListProductWithMostLikedProductType(false);
        return;
      }
      const {products: productsTypeList} = await gplQuery(GetListProduct, {
        where: {
          id_in: likedIds,
        },
      });

      const mostLikedBrand = mode(
        productsTypeList.map((p: {brand: string}) => p.brand),
      );

      const {products: productsMostLikedType} = await gplQuery(GetListProduct, {
        where: {
          brand: mostLikedBrand,
          rating_not: null,
          brand_not: null,
        },
        orderBy: 'rating_DESC',
      });
      setListProductWithMostLikedBrand(productsMostLikedType);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingListProductWithMostLikedBrand(false);
    }
  };

  const getListNewestProducts = async () => {
    setIsLoadingListNewestProducts(true);
    try {
      const {products} = await gplQuery(GetListProduct, {
        where: {
          updatedAt_not: null,
          brand_not: null,
        },
        orderBy: 'updatedAt_DESC',
      });
      setListNewestProducts(products);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingListNewestProducts(false);
    }
  };

  const loadDataHome = () => {
    setListProductWithMostLikedProductType([]);
    setListProductWithMostLikedBrand([]);
    getListProductWithMostLikedProductType();
    getListProductWithMostLikedBrand();
    getListNewestProducts();
  };

  const loadDataShop = () => {
    setSkipProduct(0);
    getProductList(true);
    getProductListCount();
  };
  //Home

  useEffect(() => {
    loadDataHome();
    loadDataShop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productLikedIds,
        totalProductCount,
        getProductListLikedIds,
        getProductListCount,
        getProductList,
        likeProduct,
        disLikeProduct,
        listProduct,
        loadDataShop,
        loadDataHome,
        listProductFavorite,
        getListProductFavorite,
        isLoadingListProduct,
        isLoadingListProductFavorite,

        //HOME
        getListProductWithMostLikedProductType,
        listProductWithMostLikedProductType,
        isLoadingListProductWithMostLikedProductType,

        getListProductWithMostLikedBrand,
        listProductWithMostLikedBrand,
        isLoadingListProductWithMostLikedBrand,

        getListNewestProducts,
        listNewestProducts,
        isLoadingListNewestProducts,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductProvider};
