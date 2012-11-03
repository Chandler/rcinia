# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121103010017) do

  create_table "contact_email_addresses", :force => true do |t|
    t.integer  "contact_id"
    t.string   "email"
    t.integer  "source_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "contact_phone_numbers", :force => true do |t|
    t.integer  "contact_id"
    t.string   "phone_number"
    t.integer  "source_id"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "contact_usernames", :force => true do |t|
    t.integer  "contact_id"
    t.string   "username"
    t.integer  "source_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "contacts", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "locations", :force => true do |t|
    t.string   "latitude"
    t.string   "longitude"
    t.string   "datetime"
    t.integer  "source_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "message_locations", :force => true do |t|
    t.integer  "message_id"
    t.integer  "location_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "messages", :force => true do |t|
    t.integer  "to_contact_id"
    t.integer  "from_contact_id"
    t.string   "message_content"
    t.string   "utc_received_time"
    t.string   "source_id"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
  end

  create_table "sms_weekly_aggs", :force => true do |t|
    t.integer  "contact_id"
    t.string   "name"
    t.integer  "message_count"
    t.string   "timeseries_data"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "sources", :force => true do |t|
    t.integer  "name"
    t.string   "last_update"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

end
