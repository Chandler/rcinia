class CreateInitialModels < ActiveRecord::Migration
 def up
    create_table :messages do |t|
      t.integer :to_contact_id
      t.integer :from_contact_id
      t.string  :message_content
      t.string  :utc_recieved_time
      t.string  :source_id
      t.timestamps
    end

    create_table :messages_locations do |t|
      t.integer :message_id
      t.integer :location_id
      t.timestamps
    end

    create_table :locations do |t|
      t.string  :latitude
      t.string  :longitude
      t.string  :datetime
      t.integer :contact_id
      t.integer :source_id
      t.timestamps
    end

    create_table :sources do |t|
      t.integer :name
      t.string  :last_update
      t.timestamps
    end

    create_table :contacts do |t|
      t.string :name
      t.timestamps
    end

    create_table :contact_phone_numbers do |t|
      t.integer :contact_id
      t.string  :phone_number
      t.integer :source_id
      t.timestamps
    end

    create_table :contact_email_addresses do |t|
      t.integer :contact_id
      t.string  :email
      t.integer :source_id
      t.timestamps
    end

    create_table :contact_usernames do |t|
      t.integer :contact_id
      t.string  :username
      t.integer :source_id
      t.timestamps
    end
  end

  def down
    drop_table :messages
    drop_table :geolocations
    drop_table :sources
    drop_table :contacts
    drop_table :contact_phone_numbers
    drop_table :contact_email_addresses
    drop_table :contact_usernames
  end
end
