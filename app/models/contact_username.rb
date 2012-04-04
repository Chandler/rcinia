class ContactUsername < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :username

  def self.deuplicate_and_create(username)
    #TODO convert nicknames to primary names
    create(:username => username)
  end

  def equivilant_usernames
    #TODO create list of known friend nicknames
  end
end
