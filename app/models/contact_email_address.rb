class ContactEmailAddress < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :email_address
end
