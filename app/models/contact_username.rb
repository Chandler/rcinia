class ContactUsername < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :username, :source_id

  def self.deuplicate_and_create(username, source_id = nil)
    #TODO convert nicknames to primary names
    create(:username => username, :source_id => source_id)
  end

  def equivilant_usernames
    #TODO create list of known friend nicknames
  end
end
