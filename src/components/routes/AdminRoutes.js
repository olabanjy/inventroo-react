
import {Warehouse,
  ProductList,
  AddProduct,
  InventoryAdjustmentList,
  AddManufacturer,
  UnitList,
  BrandList,
  ManufacturerList,
  OrganizationProfile,
  UserRoles,
  ProductGroup,
  AddProductGroup,
  AddUserRole,
  EditManufacturer,
  EditBrand,
  EditUnit,
  TaxList,
  EditTax,
  EditProduct,
  PriceList,
  AddPriceList,
  AddInventoryAdjustment
} from '../../pages';



export const routes = [
    {
        path: "/dashboard",
        exact: true,
        main: () =><h1>Dashboard</h1>
      },
    {
      path: "/dashboard/organization-profile",
      exact: true,
      main: () =><OrganizationProfile/>
    },
    {
      path: "/dashboard/user-roles",
      exact: true,
      main: () => <UserRoles/>

    },
    {
      path: "/dashboard/user-roles/new",
      exact: true,
      main: () => <AddUserRole/>

    },
    {
      path: "/warehouse",
      exact: true,
      main: () => <Warehouse/>
    },
    {
      path: "/dashboard/product-group",
      exact: true,
      main: () => <ProductGroup/>
    }
    ,
    {
      path: "/dashboard/product-group/new",
      exact: true,
      main: () => <AddProductGroup/>
    },
    {
      path: "/dashboard/product/all",
      exact: true,
      main: () => <ProductList/>
    },
    {
      path: "/dashboard/product/new",
      exact: true,
      main: () => <AddProduct/>
    },
    {
      path: "/dashboard/inventory-adjustment",
      exact: true,
      main: () => <InventoryAdjustmentList/>
    }
    ,
    {
      path: "/dashboard/manufacturer/new",
      exact: true,
      main: () => <AddManufacturer/>
    }
    ,
    {
      path: "/dashboard/unit/all",
      exact: true,
      main: () => <UnitList/>
    }
    ,

    {
      path: "/dashboard/brand/all",
      exact: true,
      main: () => <BrandList/>
    }
    ,
    {
      path: "/dashboard/manufacturer/all",
      exact: true,
      main: () => <ManufacturerList/>
    }
    ,
    {
      path: "/dashboard/manufacturer/:manufacturerId/edit",
      exact: true,
      main: () => <EditManufacturer/>
    },
    {
      path: "/dashboard/brand/:brandId/edit",
      exact: true,
      main: () => <EditBrand/>
    },
    {
      path: "/dashboard/unit/:unitId/edit",
      exact: true,
      main: () => <EditUnit/>
    }
    ,
    {
      path: "/dashboard/tax/all",
      exact: true,
      main: () => <TaxList/>
    }
    ,
    {
      path: "/dashboard/tax/:taxId/edit",
      exact: true,
      main: () => <EditTax/>
    },
    {
      path: "/dashboard/product/:productId/edit",
      exact: true,
      main: () => <EditProduct/>
    },
    ,
    {
      path: "/dashboard/price-list/all",
      exact: true,
      main: () => <PriceList/>
    },
    ,
    {
      path: "/dashboard/price-list/new",
      exact: true,
      main: () => <AddPriceList/>
    },
    ,
    {
      path: "/dashboard/inventory-adjustment/new",
      exact: true,
      main: () => <AddInventoryAdjustment/>
    },

  ];
