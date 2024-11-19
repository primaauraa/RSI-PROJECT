document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete");
    const quantities = document.querySelectorAll("input[type='number']");
  
    deleteButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
        updateTotal();
      });
    });
  
    quantities.forEach(input => {
      input.addEventListener("change", () => {
        updateTotal();
      });
    });
  
    function updateTotal() {
      let total = 0;
      const rows = document.querySelectorAll(".cart-table tbody tr");
      rows.forEach(row => {
        const price = parseInt(row.children[1].textContent.replace("Rp ", "").replace(".", ""));
        const quantity = parseInt(row.children[2].children[0].value);
        const subtotal = price * quantity;
        row.children[3].textContent = `Rp ${subtotal.toLocaleString("id-ID")}`;
        total += subtotal;
      });
      document.querySelector(".cart-summary p:nth-child(1) span").textContent = `Rp ${total.toLocaleString("id-ID")}`;
      document.querySelector(".cart-summary p:nth-child(3) span").textContent = `Rp ${total.toLocaleString("id-ID")}`;
    }
  });
  