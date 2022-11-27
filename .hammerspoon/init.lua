------BEHAVIOUR-------

hyper = {"cmd", "alt", "ctrl", "shift"}

-- Bring all Finder windows forward when one gets activated.
function applicationWatcher(appName, eventType, appObject)
    if (eventType == hs.application.watcher.activated) then
        if (appName == "Finder") then
            appObject:selectMenuItem({"Window", "Bring All to Front"})
        end
    end
end
appWatcher = hs.application.watcher.new(applicationWatcher)
appWatcher:start()

-- Reload hammerspoon config when file is changed.
function reloadConfig(files)
    doReload = false
    for _,file in pairs(files) do
        if file:sub(-4) == ".lua" then
            doReload = true
        end
    end
    if doReload then
        hs.reload()
    end
end
myWatcher = hs.pathwatcher.new(os.getenv("HOME") .. "/.hammerspoon/", reloadConfig):start()
hs.alert.show("Hammerspoon Config Loaded.")

-- Focus last used app when last window of different app is closed.

-- Show all spaces (Mission Control Toggle)
hs.hotkey.bind(hyper, "o", function()
    hs.spaces.toggleMissionControl()
end)

-- Quick Launch Terminal
hs.hotkey.bind(hyper, "return", function()
    hs.application.launchOrFocus("Alacritty")
end)

-- Spotify Volume Controls
hs.hotkey.bind(hyper, "-", function()
    hs.spotify.volumeDown()
end)

hs.hotkey.bind(hyper, "=", function()
    hs.spotify.volumeUp()
end)

hs.hotkey.bind(hyper, "8", function()
    hs.spotify.playpause()
end)

hs.hotkey.bind(hyper, "9", function()
    hs.spotify.previous()
end)

hs.hotkey.bind(hyper, "0", function()
    hs.spotify.next()
end)

-----KEY BINDINGS-----

-- Tile window to the left.
hs.hotkey.bind(hyper, "h", function()
  local win = hs.window.focusedWindow()
  local f = win:frame()
  local screen = win:screen()
  local max = screen:frame()

  f.x = max.x
  f.y = max.y
  f.w = max.w / 2
  f.h = max.h
  win:setFrame(f)
end)

-- Tile window to the right.
hs.hotkey.bind(hyper, "l", function()
  local win = hs.window.focusedWindow()
  local f = win:frame()
  local screen = win:screen()
  local max = screen:frame()

  f.x = max.x + (max.w / 2)
  f.y = max.y
  f.w = max.w / 2
  f.h = max.h
  win:setFrame(f)
end)

-- Maximise window.
hs.hotkey.bind(hyper, "k", function()
  local win = hs.window.focusedWindow()
  local f = win:frame()
  local screen = win:screen()
  local max = screen:frame()

  f.x = max.x
  f.y = max.y
  f.w = max.w
  f.h = max.h
  win:setFrame(f)
end)

-- Center Window (Partial)
hs.hotkey.bind(hyper, "j", function()
  local win = hs.window.focusedWindow()
  local f = win:frame()
  local screen = win:screen()
  local max = screen:frame()

  f.x = max.x + (max.w * 0.125)
  f.y = max.y + (max.h * 0.125)
  f.w = max.w * 0.75
  f.h = max.h * 0.75
  win:setFrame(f)
end)

