import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Dashboard from "../page/Dashboard"
import LayoutCategory from "../Layout/LayoutCategory"
import ListCategories from "../page/Categories/ListCategories"
import CreateCategory from "../page/Categories/CreateCategory"
import LayoutBrand from "../Layout/LayoutBrand"
import ListBrands from "../page/Brand/ListBrands"
import CreateBrand from "../page/Brand/CreateBrand"
import LayoutProduct from "../Layout/LayoutProduct"
import ListProducts from "../page/Product/ListProducts"
import CreateProducts from "../page/Product/CreateProducts"
import DetailProduct from "../page/Product/DetailProduct"
import EditProduct from "../page/Product/EditProduct"
import Profile from "../page/Profile"
import Login from "../page/Login"
import LayoutCustomer from "../Layout/LayoutCustomer"
import User from "../page/Customer/User"
import DetailCustomer from "../page/Customer/DetailCustomer"
import LayoutOrder from "../Layout/LayoutOrder"
import Order from "../page/Order/Order"
import LayoutSize from "../Layout/LayoutSize"
import CreateSize from "../page/Size/CreateSize"
import EditCategory from "../page/Categories/EditCategory"
import UpdateBrand from "../page/Brand/updateBrand"
import ListSize from "../page/Size/ListSize"
import UpdateSize from "../page/Size/UpdateSize"
import LayoutColor from "../Layout/LayoutColor"
import ListColor from "../page/Color/ListColor"
import CreateColor from "../page/Color/CreateColor"
import UpdateColor from "../page/Color/UpdateColor"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/category",
                element: <LayoutCategory />,
                children: [
                    {
                        path: "/category/list-categories",
                        element: <ListCategories />
                    },
                    {
                        path: "/category/update-category/:id",
                        element: <EditCategory />
                    },
                    {
                        path: "/category/create-category",
                        element: <CreateCategory />
                    }
                ]
            },
            {
                path: "/brand",
                element: <LayoutBrand />,
                children: [
                    {
                        path: "/brand/list-brands",
                        element: <ListBrands />
                    },
                    {
                        path: "/brand/update-brand/:id",
                        element: <UpdateBrand />
                    },
                    {
                        path: "/brand/create-brand",
                        element: <CreateBrand />
                    }
                ]
            },
            {
                path: "/size",
                element: <LayoutSize />,
                children: [
                    {
                        path: "/size/list-sizes",
                        element: <ListSize />
                    },
                    {
                        path: "/size/create-size",
                        element: <CreateSize />
                    },
                    {
                        path: "/size/update-size/:id",
                        element: <UpdateSize />
                    }
                ]
            },
            {
                path: "/product",
                element: <LayoutProduct />,
                children: [
                    {
                        path: "/product/list-products",
                        element: <ListProducts />
                    },
                    {
                        path: "/product/create-product",
                        element: <CreateProducts />
                    },
                    {
                        path: "/product/detail-product/:id",
                        element: <DetailProduct />
                    },
                    {
                        path: "/product/update-product/:id",
                        element: <EditProduct />
                    },
                ]
            },
            {
                path: "/color",
                element: <LayoutColor />,
                children: [
                    {
                        path: "/color/list-colors",
                        element: <ListColor />
                    },
                    {
                        path: "/color/create-color",
                        element: <CreateColor />
                    },
                    {
                        path: "/color/update-color/:id",
                        element: <UpdateColor />
                    },
                ]
            },
            {
                path: "/customer",
                element: <LayoutCustomer />,
                children: [
                    {
                        path: "/customer/list-customers",
                        element: <User />
                    },
                    {
                        path: "/customer/detail-customer/:id",
                        element: <DetailCustomer />
                    }
                ]
            },
            {
                path: "/order",
                element: <LayoutOrder />,
                children: [
                    {
                        path: "/order/list-orders",
                        element: <Order />
                    },
                    {
                        path: "/order/detail-order/:id",
                        element: <DetailCustomer />
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
])

export default router