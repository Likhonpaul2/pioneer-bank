
// login btn event handler 

const login_btn = document.getElementById('login');
login_btn.addEventListener('click', function () {
    const login_area = document.getElementById('login_area');
    login_area.style.display = "none";

    const transction_area = document.getElementById('transition_area');
    transction_area.style.display = "block";

})

// deposite btn event handler 
const deposite_btn = document.getElementById('add_deposite_btn');
deposite_btn.addEventListener('click', function () {

    const deposite_number = get_input_number('deposite_amount');

    // const current_deposite = document.getElementById('current_deposite').innerText;
    // const current_deposite_number = parseFloat(current_deposite);
    // const total_deposite = deposite_number + current_deposite_number;
    // document.getElementById('current_deposite').innerText = total_deposite;

    update_span_text('current_deposite', deposite_number);
    update_span_text('current_balance', deposite_number);

    document.getElementById('deposite_amount').value = "";
})

// withdraw btn event haldler 
const withdraw_btn = document.getElementById('add_withdraw_btn');
withdraw_btn.addEventListener('click', function () {
    const withdraw_number = get_input_number('withdraw_amount');


})

// get input number
function get_input_number(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}
// update text 
function update_span_text(id, deposite_number) {
    const current = document.getElementById(id).innerText;
    const current_number = parseFloat(current);
    const total_balance = deposite_number + current_number;
    document.getElementById(id).innerText = total_balance;
}