class MessageLocation < ActiveRecord::Base  
  belongs_to :message
  belongs_to :location
  attr_accessible :message_id, :location_id
end
