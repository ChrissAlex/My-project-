let totalExpenses = 0;

        function addEntry() {
            var date = document.getElementById('dateInput').value;
            var selling = parseFloat(document.getElementById('sellingInput').value);
            var expenses = parseFloat(document.getElementById('expensesInput').value);
            var details = document.getElementById('detailInput').value;
            var table = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
            var total = selling - expenses;
            var newRow = table.insertRow();

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);

            cell1.innerHTML = details.toUpperCase();
            cell2.innerHTML = date;
            cell3.innerHTML = selling.toFixed(2);
            cell4.innerHTML = expenses.toFixed(2);
            cell5.innerHTML = total.toFixed(2);
            cell6.innerHTML = '<button onclick="deleteRow(this)" style="background-color:red; padding: 10px; color:#000; border: none; border-radius:1.8px; font-weight: bold;">DELETE</button>';

            totalExpenses += expenses;
            document.getElementById("totalExpenses").innerHTML = "TOTAL EXPENSES: " + totalExpenses.toFixed(2);
        }

        function clearField() {
            document.getElementById('dateInput').value = '';
            document.getElementById('sellingInput').value = '';
            document.getElementById('expensesInput').value = '';
            document.getElementById('detailInput').value = '';
        }

        function deleteRow(btn) {
            var row = btn.parentNode.parentNode;
            var expenses = parseFloat(row.cells[3].innerHTML);
            totalExpenses -= expenses;
            document.getElementById("totalExpenses").innerHTML = "TOTAL EXPENSES: " + totalExpenses.toFixed(2);
            row.parentNode.removeChild(row);
        }

        function downloadPDF() {
    var pdf = new jsPDF('p', 'pt', 'A4');
    $("#button-pdf").attr('hidden', 'true')
    pdf.addHTML($(document.body), 22, 34, { allowTaint: true, useCORS: true, pagesplit: false }, function () {
    pdf.save('personal_cash.pdf');
    $("#button-pdf").removeAttr('hidden', 'true')
  });
        }