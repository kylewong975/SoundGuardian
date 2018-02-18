import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('serviceAccountKey.json')
default_app = firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://soundguardian-8a7b3.firebaseio.com/'
    })

MIC_ID = "M11"

micNodeRef = db.reference('microphones/M11')

micNode = micNodeRef.get()

micNode['status'] = 0

micNodeRef.update(micNode)
