eval "$(/opt/homebrew/bin/brew shellenv)"

alias py="python3"
alias vim="nvim"

source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /opt/homebrew/opt/zsh-fast-syntax-highlighting/share/zsh-fast-syntax-highlighting/fast-syntax-highlighting.plugin.zsh

# Set Java to openjdk
export JAVA_HOME=/opt/homebrew/opt/openjdk/
export PATH="$PATH:${JAVA_HOME}/bin"

# 
# Manage Java versions
# export JAVA_18_HOME=$(/usr/libexec/java_home -v18)
# export JAVA_11_HOME=$(/usr/libexec/java_home -v11)
#
# alias java18='export JAVA_HOME=$JAVA_18_HOME'
# alias java11='export JAVA_HOME=$JAVA_11_HOME'
# 
# # default to Java 11
# java11
# 
# alias javat='/Users/lamy/jdks/zulu11.58.23-ca-jdk11.0.16.1-macosx_aarch64/zulu-11.jdk/Contents/Home/bin/java'
#
# Set Java to zulu release
# export JAVA_HOME=/Users/lamy/jdks/zulu11.58.23-ca-fx-jdk11.0.16.1-macosx_aarch64/
# export PATH=$PATH:${JAVA_HOME}/bin
