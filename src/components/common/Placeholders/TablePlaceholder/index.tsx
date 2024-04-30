export default function TablePlaceholder() {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="skeleton mask mask-squircle w-12 h-12 cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-56 font-bold cursor-pointer"></div>
            <div className="skeleton h-4 w-24 text-sm cursor-pointer"></div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-12"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>
      </td>
      <td>
        <div className="skeleton h-4 w-12"></div>
      </td>
      <td>
        <div className="skeleton h-12 w-14"></div>
      </td>
    </tr>
  );
}
