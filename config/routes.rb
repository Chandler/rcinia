Rcinia::Application.routes.draw do

  #decided to do non-resourceful routing for now since the site is so simple.
  #this will probably need reworked.

  root              :to => 'home#d3'
  match '/about',   :to => 'home#about',                :as => :about
  match '/chart/1', :to => 'chart#message_location',    :as => :message_location
  match '/chart/2', :to => 'chart#friendship_trending', :as => :friendship_trending
  match '/chart/3', :to => 'chart#word_analysis',       :as => :word_analysis
 
end
