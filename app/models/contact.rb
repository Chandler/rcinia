class Contact < ActiveRecord::Base
  
  has_many :to_messages, :class_name => "Message", :foreign_key => "to_contact_id"
  has_many :from_messages, :class_name => "Message", :foreign_key => "from_contact_id"
  has_many :contact_usernames
  has_many :contact_email_addresses
  has_many :contact_phone_numbers
  has_many :locations


  def self.contact_from_username(username)
    contact_username = ContactUsername.find_by_username(username)
    if contact_username == nil
      contact = Contact.create
      contact.contact_usernames.deuplicate_and_create(username)
      contact
    else
      contact_username.contact
    end
  end

  def display_name
    self.contact_usernames.first.username
  end

end
