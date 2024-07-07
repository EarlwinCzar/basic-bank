let balance = 10000;
let newElem;

// get the element
// const input = document.getElementById("withdrawInput").value;

// parse it into number
// const numericInput = parseFloat(input);

function withdrawSelection() {
  var withdrawSelection = document.querySelector(".wrapper1");
  withdrawSelection.style.display = "flex";

  var depositSelection = document.querySelector(".wrapper2");
  depositSelection.style.display = "none";

  var balanceCheckSelection = document.querySelector(".wrapper3");
  balanceCheckSelection.style.display = "none";
}

function depositSelection() {
  var depositSelection = document.querySelector(".wrapper2");
  depositSelection.style.display = "flex";

  var withdrawSelection = document.querySelector(".wrapper1");
  withdrawSelection.style.display = "none";

  var balanceCheckSelection = document.querySelector(".wrapper3");
  balanceCheckSelection.style.display = "none";
}

function balanceCheckSelection() {
  console.log(balance);

  var balanceCheckSelection = document.querySelector(".wrapper3");
  balanceCheckSelection.style.display = "flex";

  var depositSelection = document.querySelector(".wrapper2");
  depositSelection.style.display = "none";

  var withdrawSelection = document.querySelector(".wrapper1");
  withdrawSelection.style.display = "none";

  if (!newElem) {
    newElem = document.createElement("div");
    balanceCheckSelection.append(newElem);
    newElem.textContent = balance;
    console.log(balance);
  } else {
    balanceCheckSelection.append(newElem);
    newElem.textContent = balance;
  }
}

function withdraw() {
  const input = document.getElementById("withdrawInput").value;
  const numericInput = parseFloat(input);

  if (numericInput) {
    if (numericInput > balance) {
      console.log("no balance");
      alert(
        `WARNING: Insufficient balance, your current balance is ${balance}`
      );
      document.getElementById("withdrawInput").value = "";
    } else if (numericInput < 1000) {
      alert(
        `WARNING: Minimum withdraw is above 1000, you are withdrawing ${numericInput}`
      );
    } else {
      let result = balance - numericInput;
      alert(
        `Withdraw success! You have withdrawn ${numericInput} Your current balance is ${result}`
      );
      document.getElementById("withdrawInput").value = "";
      return (balance = result);
    }
  } else {
    alert(`WARNING: Error No input value`);
    document.getElementById("withdrawInput").value = "";
  }
}

function deposit() {
  const input = document.getElementById("depositInput").value;
  const numericInput = parseFloat(input);
  const lessThan1k = numericInput < 1000;
  const greaterThan100k = numericInput > 100000;

  if (numericInput) {
    if (lessThan1k) {
      alert(`WARNING: Please deposit no less than 1000`);
      document.getElementById("depositInput").value = "";
    }
    if (greaterThan100k) {
      alert(`WARNING: Please deposit no greater than 100000`);
      document.getElementById("depositInput").value = "";
    }
    if (!lessThan1k && !greaterThan100k) {
      let result = balance + numericInput;
      alert(
        `Deposit sucess! You deposit ${numericInput}. Your total balance is now ${result}`
      );
      document.getElementById("depositInput").value = "";
      return (balance = result);
    }
  } else {
    alert(`WARNING: Error No input value`);
    document.getElementById("depositInput").value = "";
  }
}
