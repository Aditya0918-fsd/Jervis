import os
import re
import webbrowser
from playsound import playsound
import eel
import sqlite3
from engine.command import speak
from engine.config import ASSISTANT_NAME
import pywhatkit as kit

#Playing assistent sound function

conn = sqlite3.connect('shree.db')
cursor = conn.cursor()

@eel.expose
def playAssistantSound():
    music_dir = "D:\\Jervis\\www\\assets\\audio\\Siri sound.mp3"
    playsound(music_dir)


def openCommand(query):
    query = query.replace(ASSISTANT_NAME, "")
    query = query.replace("open", "")
    query.lower()

    app_name = query.strip()

    if app_name != "":

        try:
            cursor.execute(
                'SELECT path FROM sys_command WHERE name IN (?)', (app_name,))
            result = cursor.fetchall()

            if len(result) != 0:
                speak("Opening " +query)
                os.startfile(result[0][0])

            elif len(result) == 0:
                cursor.execute(
                'SELECT url FROM web_command WHERE name IN (?)', (app_name,))
                result = cursor.fetchall()

                if len(result) != 0:
                    speak("Opening " +query)
                    webbrowser.open(result[0][0])

                else:
                    speak("Opening "+query)
                    try:
                        os.system('Start '+query)
                    except:
                        speak("Not found")
        except:
            speak("Some thing wents wrong")

def PlayYoutube(query):
    search_term = extract_yt_term(query)
    speak("Playing "+search_term+" on YouTube")
    kit.playonyt(search_term)

def extract_yt_term(command):
    pattern= r'play\s+(.*?)\s+on\s+youtube'
    match = re.search(pattern, command, re.IGNORECASE)
    return match.group(1) if match else None