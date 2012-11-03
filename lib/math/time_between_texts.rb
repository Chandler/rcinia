module TimeBetweenTexts
  def self.test()


    all_messages = Message.find(:all, :order => "utc_received_time DESC")
    max_diff = 0;

    start_max_message = nil
    end_max_message = nil

    previous_message = all_messages.shift

    all_messages.each do |message|
      previous_time = DateTime.strptime(previous_message.utc_received_time, '%Y-%m-%dT%H:%M:%S.%L%z').to_time.to_i
      current_time = DateTime.strptime(message.utc_received_time, '%Y-%m-%dT%H:%M:%S.%L%z').to_time.to_i

      start_filter = DateTime.strptime("2012-01-01", '%Y-%m-%d').to_time.to_i
      end_filter = DateTime.strptime("2012-12-21", '%Y-%m-%d').to_time.to_i

      if(previous_time > start_filter && previous_time < end_filter)
        diff = previous_time - current_time
        if(diff > max_diff)
          max_diff = diff
          start_max_message = previous_message
          end_max_message = message
          puts "this is the new biggest " + max_diff.to_s
        end
      end


      previous_message = message
    end
    puts max_diff
    puts "first message: "
    puts start_max_message.utc_received_time
    puts start_max_message.message_content
    puts "to #{start_max_message.to_contact_id} ---- from #{start_max_message.from_contact_id}" 

    puts "\n\n "
    puts "last message: "
    puts end_max_message.utc_received_time
    puts end_max_message.message_content
    puts "to #{end_max_message.to_contact_id} ---- from #{end_max_message.from_contact_id}" 

    return 1
  end
end


# 99039
#27 hours
# first message: 
# 2010-03-19T01:53:14.131-07:00
# hey mom I know it's late just read this in the morning. I just wanted to let you know before I went to bed that i'll be at the house tomorrow night prolly.  see you then, love you.
# to 685 ---- from 1


 
# last message: 
# 2010-03-17T22:22:35.413-07:00
# O i hope so cause i have awhile lol     ~ Ali ~
# to 1 ---- from 569


# 102473
# 102473/60/60 28.45 
# first message: 
# 2011-06-06T17:58:08.954-07:00
# dood are you near a computer? Weiner came clean about everything, he lied about being hacked. he was sending pictures to that college girl.
# to 670 ---- from 1


 
# last message: 
# 2011-06-05T13:30:15.373-07:00
# He has had cancer for quite awhile
# to 1 ---- from 685
#  => 1 
# 1.9.3p194 :097 > 



