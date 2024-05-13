The Expense Tracker is a good way of keeping up with your expenses and making sure they don't exceed your income!
The entire project is built using React.

The app consists of a header containing your budget and three main category buttons.
The "Set total budget" button let's the user set their budget by adding how much income they have in dollars.
The "Log a new expense" is a form with validation that let's users add their expenses. Both the budget and the expenses are saved in localStorage so that the page can be refreshed and they won't disappear.

The last category button is "See earlier expenses". This button allows you to see the expenses you've already logged. From here they can also be deleted. This also deletes them from the localStorage and updates the budget so that it adds back the expenses that has been deleted.

The header in this app serves an important function. It shows the user how much money they have in their balance, but if the budget is succeeded the header color changes from green (positive numbers) to red (negative numbers). That way the user has an instant feedback if their expenses are getting out of control and can adjust accordingly.

Link to GitHub repository:
https://github.com/IdaHolmen/Expense-Tracker

Link to deployed Netlify site:
https://ephemeral-pony-61a2da.netlify.app/

<img width="1470" alt="Screenshot 2024-05-13 at 08 50 53" src="https://github.com/IdaHolmen/Expense-Tracker/assets/143997448/6cb03a4c-0ea3-4629-b5dc-1523ddcc5061">

Example image with 700$ in added amount to the budget.

<img width="1470" alt="Screenshot 2024-05-13 at 08 50 24" src="https://github.com/IdaHolmen/Expense-Tracker/assets/143997448/7ba76778-f0bd-4caa-ab76-54974d7937d2">

Example image if the budget were to be exceeded. The header turns red when reaching negative numbers.

<img width="1470" alt="Screenshot 2024-05-13 at 08 49 53" src="https://github.com/IdaHolmen/Expense-Tracker/assets/143997448/e2fc453e-bfa3-4299-931c-41620f6da791">

The log of earlier expenses with the possibility to delete.
