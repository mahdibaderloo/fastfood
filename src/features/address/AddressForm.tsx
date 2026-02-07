function AddressForm() {
  return (
    <form>
      <div>
        <label htmlFor="address">Address</label>
        <textarea id="address">Karaj,...</textarea>
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input type="number" id="street" />
      </div>
      <div>
        <label htmlFor="no">No.</label>
        <input type="number" id="no" />
      </div>
    </form>
  );
}

export default AddressForm;
