# Chain of Responsability Pattern

## Person Example

This example uses and approach that would replace `if else` statements, while breaking the responsability in different handlers.

In this example, once a handler meets the condition, it "breaks" the chain of execution an returns on the first handler that was able to process the rule.

## Order Example

In this example we use chain of responsability in a different way. Instead of breaking the chain once a handler was able to fulfill it's task, we actually created a pipeline of handlers that modify one object.

In this case it's an Order of a store, where the user adds items to the order, and when doing the checkout we run the steps in order to verify if the user is eligible for discounts, based on the coupon code, if the order meet's the criteria for free delivery, or if the user added one item that allows him to get a disccount on that specific item.

With that, instead of having a bunch of "if and elses" in a single statement, we broke it down into separate classes, making it a lot easier to test, add or remove rules.