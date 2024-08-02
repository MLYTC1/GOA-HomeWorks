# from email import message
from email import message
import types
from pydantic_core import Url
import telebot
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telebot import types
import webbrowser
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler

bot = telebot.TeleBot("6753085486:AAEESF32QfyBhUySiBeWKjkhnshh6sYWQng")

# @bot.message_handler(commands=['start'])
# def info(message):
#     bot.send_message(message.chat.id, f'Hello, {message.from_user.first_name} {message.from_user.last_name}'+", Welcome To Goal Oriented Academy!" )

#     bot.register_next_step_handler(message, on_cklick)
@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, f'Hello, {message.from_user.first_name} {message.from_user.last_name}'+", Welcome To Goal Oriented Academy!" )
    markup =  types.InlineKeyboardMarkup()
    btn1 = types.InlineKeyboardButton('Run Website', url='https://mlytc1.github.io/GOA-H-W/')
    btn4 = types.InlineKeyboardButton('Info',callback_data='info' )
    markup.row(btn1,btn4)
    btn2 = types.InlineKeyboardButton('Join GOA', url='https://www.facebook.com/nika11keshelava' )
    btn3 = types.InlineKeyboardButton('YouTube Channel',url='https://www.youtube.com/@Goal_Oriented_Academy__GOA' )
    markup.row(btn2, btn3)
    bot.send_message(message.chat.id, "Select option:", reply_markup=markup)
    bot.register_next_step_handler(message, callback_message)

@bot.callback_query_handler(func=lambda callback: True)
def callback_message(callback):
    if callback.data == 'info':
        bot.send_message(callback.message.chat.id, "ხვდები, რომ უნივერსიტეტში არაფერს საჭიროს არ სწავლობ? გაქვს იმის განცდა რომ უნივერსიტეტში უბრალოდ დროს კარგავ? ხვდები, რომ უნივერსიტეტი დაბალ შემოსავლიან სამსახურამდე მიგიყვანს? მაშ, ეს ვიდეო შენთვისაა. უყურეთ თავიდან ბოლომდე და იპოვით გამოსავალს  მე, Nika Keshelava, და ჩემი გუნდი, მზად ვართ დაგეხმაროთ და ბოლომდე გამოგყვეთ დასახული მიზნების მიღწევაში 2024 წლის აპრილში ვიწყებთ პროგრამირების კურსის ახალ ნაკადს ზრდასრულებისთვის (ასაკი 17+)  გაკვეთილები ჩატარდება კვირაში ერთხელ, ორჯერ ან სამჯერ(როგორც აირჩევთ) კვირაში 1ხელ:--კურსის ღირებულება არის ფასდაკლებით: თვეში 170 ლარი, ნაცვლად 340 ლარისა. კვირაში 2ჯერ:-- კურსის ღირებულება არის ფასდაკლებით: თვეში 290 ლარი, ნაცვლად 560 ლარისა. კვირაში 3ჯერ:-- კურსის ღირებულება არის ფასდაკლებით: თვეში 390 ლარი, ნაცვლად 840 ლარისა. საბაზისო ეტაპის ხანგრძლივობა არის 1 წელი, ხოლო სიღრმისეული კურსი - 2.5 წელი(დამოკიდებულია თქვენს მიზნებზე)   წარმატებული სტუდენტები საქმდებიან Goal-Oriented Academy • GOA-ში და პარტნიორ კომპანიებში.") 
        bot.register_next_step_handler(callback.message, on_cklick )
#----------------------------------------------------------------------------------------------------------------------------------

# #Bottom 1
# @bot.message_handler(func=lambda message: message.text == "Open Website")
# def button1(message):
#     bot.send_message(message.chat.id, "Website Is Open")
#     webbrowser.open("https://mlytc1.github.io/GOA-H-W/")

# #Bottom 2
# @bot.message_handler(func=lambda message: message.text == "Join Goa")
# def button2(message):
#     # bot.send_message(message.chat.id, "")
#     webbrowser.open('https://www.facebook.com/nika11keshelava')

#     bot.register_next_step_handler(message, on_cklick)
#-----------------------------------------------------------------------------------------------------------------------------------
@bot.message_handler()
def on_cklick(message):
    if message.text.lower() == 'run website' or message.text.lower() == 'site' or message.text.lower() == 'saiti' or message.text.lower() == 'web':
        bot.send_message(message.chat.id, 'Website Is Open')
        webbrowser.open("https://mlytc1.github.io/GOA-H-W/")
    elif message.text == 'Join GOA':
        webbrowser.open('https://www.facebook.com/nika11keshelava')
  #---------------------------------------------------------------------------------
    #   @bot.message_handler(commands=['start'])
    # def start(message):
    #     markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    #     item1 = types.KeyboardButton("Bottom 1")
    #     item2 = types.KeyboardButton("Bottom 2")
    #     markup.add(item1, item2)
    
    #     bot.send_message(message.chat.id, "Select option:", reply_markup=markup)
    
    # #Bottom 1
    # @bot.message_handler(func=lambda message: message.text == "Bottom 1")
    # def button1(message):
    #     bot.send_message(message.chat.id, "U select bottom 1")
    
    # #Bottom 2
    # @bot.message_handler(func=lambda message: message.text == "Bottom 2")
    # def button2(message):
    #     bot.send_message(message.chat.id, "U select bottom 2")      










bot.polling(none_stop=True)
