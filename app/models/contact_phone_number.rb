class ContactPhoneNumber < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :phone_number
end
