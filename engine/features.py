from playsound import playsound
import eel

#Playing assistent sound function

@eel.expose
def playAssistantSound():
    music_dir = "D:\\Jervis\\www\\assets\\audio\\Siri sound.mp3"
    playsound(music_dir)