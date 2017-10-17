# -*- coding: UTF-8 -*-

from fbchat import Client
from fbchat.models import *

sender_email = '...'
sender_password = '....'

client = Client(sender_email, sender_password)

print('Own id: {}'.format(client.uid))

client.sendMessage('Hi me! from Python Chat Bot', thread_id=client.uid, thread_type=ThreadType.USER)

client.logout()
