class Location < ActiveRecord::Base
  
  belongs_to :contact, :source


end
