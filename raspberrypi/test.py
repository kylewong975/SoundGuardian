import subprocess
import shlex
import time
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

def magicFunc(inp):
    return True


SAMPLE_LENGTH = 5;
OUTPUT_FILE_NAME = 'test.wav'
AUDIORECORD_COMMAND = 'arecord  -D plughw:1 -d ' + str(SAMPLE_LENGTH) + ' ' + OUTPUT_FILE_NAME

print AUDIORECORD_COMMAND

args = shlex.split(AUDIORECORD_COMMAND)

while True:
    try:
        p = subprocess.Popen(args)
        p.wait()
        if (magicFunc(OUTPUT_FILE_NAME)):
            micNode['status'] = 1
            micNodeRef.update(micNode)
        else:
            micNode['status'] = 0
            micNodeRef.update(micNode)
    except Exception:
        p.kill()
