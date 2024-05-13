The Expense Tracker is a good way of keeping up with your expenses and making sure they don't exceed your income!
The entire project is built using React.

The app consists of a header containing your budget and three main category buttons.
The "Set total budget" button let's the user set their budget by adding how much income they have in dollars.
The "Log a new expense" is a form with validation that let's users add their expenses. Both the budget and the expenses are saved in localStorage so that the page can be refreshed and they won't disappear.

The last category button is "See earlier expenses". This button allows you to see the expenses you've already logged. From here they can also be deleted. This also deletes them from the localStorage and updates the budget so that it adds back the expenses that has been deleted.

The header in this app serves an important function. It shows the user how much money they have in their balance, but if the budget is succeeded the header color changes from green (positive numbers) to red (negative numbers). That way the user has an instant feedback if their expenses are getting out of control and can adjust accordingly.

Link to GitHub repository:
https://github.com/IdaHolmen/Expense-Tracker



<img width="320" alt="Screenshot 2024-05-13 at 08 41 25" src="https://github.com/IdaHolmen/Expense-Tracker/assets/143997448/f72df011-e5b5-4ad7-93cf-310c64d07ae8">
Example image with 700$ in added amount to the budget.



<img width="321" alt="Screenshot 2024-05-13 at 08 43 40" src="https://github.com/IdaHolmen/Expense-Tracker/assets/143997448/d633513e-0b58-4668-b2cf-897716694024">
Example image if the budget were to be exceeded. The header turns red when reaching negative numbers.



<img width="215" alt="Screenshot 2024-05-13 at 08 44 58" src="https://github.com/IdaHolmen/Expense-Tracker/assets/143997448/dcb61dc7-bf51-433a-9fbd-9dfb4cd68553">
The log of earlier expenses with the possibility to delete.
