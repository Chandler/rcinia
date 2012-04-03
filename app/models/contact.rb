class Contact < ActiveRecord::Base
  
  has_many :to_messages, :class_name => "Message", :foreign_key => "to_contact_id"
  has_many :from_messages, :class_name => "Message", :foreign_key => "from_contact_id"

  has_many :locations


end
