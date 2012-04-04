class Location < ActiveRecord::Base
  
  belongs_to :contact
  belongs_to :source
  attr_accessible :contact_id
  validates_presence_of :contact_id

end
