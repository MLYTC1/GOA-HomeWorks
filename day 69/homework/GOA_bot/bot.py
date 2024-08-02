
def calculate_compound_interest(principal, daily_interest_rate, days):
    amount = principal * (1 + daily_interest_rate) ** days
    return amount

# Example usage:
principal_amount = 101  # Initial amount of money
daily_interest_rate = 0.015  # 1.5% daily interest rate (expressed as a decimal)
number_of_days = 30  # Number of days

final_amount = calculate_compound_interest(principal_amount, daily_interest_rate, number_of_days)
print("Final amount after {} days: ${:.2f}".format(number_of_days, final_amount))
