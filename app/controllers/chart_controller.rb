class ChartController < ApplicationController
  def message_location
    #@geojson = MessageLocation.geojson

    @nums = ('1'..'96').to_a.reverse
  end



  def friendship_trending
  end

  def word_analysis
  end

end
