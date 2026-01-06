import ProductCard from '../../components/shop/ProductCard';
import ShopLayout from '../../components/shop/ShopLayout';
import { DataShopSnack } from '../../stores/data/shop';

const ShopSnack = () => {
  const breadcrumbItems = [
    { label: 'Shop', link: '/shop' },
    { label: 'Shop Snack', link: '/shop-snack' },
  ];

  return (
    <ShopLayout
      title="Snack"
      breadcrumbItems={breadcrumbItems}
      showFilters={true}
      showSidebar={true}
      totalItems={DataShopSnack.length}
    >
      {({ selectedCategory, selectedTag }) => {
        const filteredProducts = DataShopSnack.filter((p) => {
          const matchCategory =
            selectedCategory === 'All' || p.category === selectedCategory;

          const matchTag =
            !selectedTag || p.tags?.includes(selectedTag);

          return matchCategory && matchTag;
        });

        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {filteredProducts.slice(0, 20).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        );
      }}
    </ShopLayout>
  );
};

export default ShopSnack;
