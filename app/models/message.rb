class Message < ActiveRecord::Base
  
  belongs_to :to_contact, :class_name => "Contact"
  belongs_to :from_contact, :class_name => "Contact"

  has_many :locations

end
