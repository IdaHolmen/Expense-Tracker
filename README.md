The Expense Tracker is a good way of keeping up with your expenses and making sure they don't exceed your income!
The entire project is built using React.

The app consists of a header containing your budget and three main category buttons.
The "Set total budget" button let's the user set their budget by adding how much income they have in dollars.
The "Log a new expense" is a form with validation that let's users add their expenses. Both the budget and the expenses are saved in localStorage so that the page can be refreshed and they won't disappear.

The last category button is "See earlier expenses". This button allows you to see the expenses you've already logged. From here they can also be deleted. This also deletes them from the localStorage and updates the budget so that it adds back the expenses that has been deleted.

The header in this app serves an important function. It shows the user how much money they have in their balance, but if the budget is succeeded the header color changes from green (positive numbers) to red (negative numbers). That way the user has an instant feedback if their expenses are getting out of control and can adjust accordingly.
