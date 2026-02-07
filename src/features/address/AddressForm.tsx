function AddressForm() {
  return (
    <form>
      <div className="flex flex-col ">
        <label htmlFor="address" className="text-neutral-950">
          Address
        </label>
        <textarea
          id="address"
          className="ml-1 text-[0.7rem] text-neutral-700 bg-amber-50 p-1 pl-2 rounded-xl outline-none border-none shadow min-h-12 max-h-20"
          draggable="false"
          maxLength={200}
        >
          Karaj,...
        </textarea>
      </div>

      <div className="flex">
        <div className="flex flex-col mt-2 w-1/2">
          <label htmlFor="street" className="text-neutral-950">
            Street
          </label>
          <input
            type="text"
            id="street"
            className="ml-1 text-[0.7rem] text-neutral-700 bg-amber-50 p-1 pl-2 rounded-xl outline-none border-none shadow"
            maxLength={20}
          />
        </div>
        <div className="flex flex-col mt-2 w-1/2">
          <label htmlFor="no" className="text-neutral-950">
            No.
          </label>
          <input
            type="number"
            id="no"
            className="ml-1 text-[0.7rem] text-neutral-700 bg-amber-50 p-1 pl-2 rounded-xl outline-none border-none shadow"
          />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="postal-code" className="text-neutral-950">
          Postal code
        </label>
        <input
          type="number"
          id="postal-code"
          className="ml-1 text-[0.7rem] text-neutral-700 bg-amber-50 p-1 pl-2 rounded-xl outline-none border-none shadow"
        />
      </div>
    </form>
  );
}

export default AddressForm;
