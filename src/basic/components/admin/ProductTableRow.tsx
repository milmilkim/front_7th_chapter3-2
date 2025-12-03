import { ProductWithUI } from '../../../types';

interface ProductTableRowProps {
  product: ProductWithUI;
  remainingStock: number;
  onEdit: (product: ProductWithUI) => void;
  onDelete: (productId: string) => void;
}

const ProductTableRow = ({
  product,
  remainingStock,
  onEdit,
  onDelete,
}: ProductTableRowProps) => {
  const formatPrice = () => {
    if (remainingStock <= 0) return 'SOLD OUT';
    return `${product.price.toLocaleString()}원`;
  };

  const getStockBadgeClass = () => {
    if (product.stock > 10) return 'bg-green-100 text-green-800';
    if (product.stock > 0) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {product.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatPrice()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStockBadgeClass()}`}
        >
          {product.stock}개
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
        {product.description || '-'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onEdit(product)}
          className="text-indigo-600 hover:text-indigo-900 mr-3"
        >
          수정
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-600 hover:text-red-900"
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;

