class SmsAggWeekly < ActiveRecord::Migration
  def up
    create_table :sms_weekly_aggs do |t|
      t.integer :contact_id
      t.string  :name
      t.integer :message_count
      t.string  :timeseries_data
      t.timestamps
    end
  end

  def down
    drop_table :sms_agg_weekly
  end
end
