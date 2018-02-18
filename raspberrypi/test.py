import subprocess
import shlex
import time

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
    except Exception:
        p.kill()
