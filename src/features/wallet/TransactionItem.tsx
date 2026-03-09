export default function TransactionItem() {
  return (
    <li className="flex items-center justify-between bg-amber-50 p-2 shadow rounded-lg sm:h-10 sm:p-4">
      <p className="text-sm text-neutral-800">Buy Pizza</p>
      <span className="text-sm text-red-500">- $128.00</span>
    </li>
  );
}
