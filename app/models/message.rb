class Message < ActiveRecord::Base
  belongs_to :to_contact, :class_name => "Contact"
  belongs_to :from_contact, :class_name => "Contact"
  has_one    :message_location 
  attr_accessible :to_contact_id, :from_contact_id, :message_content, :utc_received_time
end
