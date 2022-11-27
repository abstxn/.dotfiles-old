" Quality of Life
set autoindent
set expandtab
set shiftround
set shiftwidth=4
set tabstop=4
filetype on
filetype indent on
" Searching
set hlsearch
set ignorecase
set incsearch
set smartcase

set encoding=utf-8
set laststatus=2
set wildmenu
set title
" set background=dark
" set guicursor= " Prevent nvim from overriding default cursor settings (like blinking)
" Vim Backups/Swapfiles
set backupdir=~/.vim/backup
set undodir=~/.vim/undo
set noswapfile
set history=1000

call plug#begin()
    " User Interface
    Plug 'scrooloose/nerdtree'
    Plug 'itchyny/lightline.vim'
    " Code Completion
    Plug 'valloric/youcompleteme'
    " Colorschemes
    Plug 'dracula/vim'
    Plug 'tomasr/molokai'
    Plug 'joshdick/onedark.vim'
    Plug 'catppuccin/nvim', { 'as': 'catppuccin' }
call plug#end()

" Visuals
colorscheme catppuccin-macchiato
let g:lightline = {'colorscheme': 'catppuccin'}
syntax enable
set colorcolumn=81
set wrap " softwrap text at the edge of screen
set linebreak " won't break in the middle of a word
set relativenumber " alts: number
set number

""" NERDTree Configuration
" Start NERDTree. If a file is specified, move the cursor to its window.
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * NERDTree | if argc() > 0 || exists("s:std_in") | wincmd p | endif
" Close the tab if NERDTree is the only window remaining in it.
autocmd BufEnter * if winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif
" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif
" Open the existing NERDTree on each new tab.
autocmd BufWinEnter * if getcmdwintype() == '' | silent NERDTreeMirror | endif

""" Keybinds
" Hit enter after search to un-highlight last search pattern.
nnoremap <CR> :noh<CR><CR>
