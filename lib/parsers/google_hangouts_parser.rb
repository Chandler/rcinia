require 'json'
module GoogleHangoutsParser
  def self.parse
    geo = JSON.parse(File.read('../sources/Hangouts.json'))
    puts geo.keys
    # geo["data"]["items"].each do |item|
    #   Location.create({ :latitude  => item['latitude'],
    #                     :longitude => item['longitude'],
    #                     :datetime  => item['timestampMs']

    #   })
    end
  end
end
