class Location < ActiveRecord::Base
  belongs_to :contact
  belongs_to :source
  has_one    :message_locationend 
  attr_accessible :contact_id, :latitude, :longitude, :datetime
end