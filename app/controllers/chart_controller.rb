class ChartController < ApplicationController
  def index
  end

  def smsTimeseries(limit = 15)
      data = SmsWeeklyAgg.all(:limit=>limit, :order => "message_count desc")
      render :json => data.map{|m| ActiveSupport::JSON.decode(m.timeseries_data)}  
  end

  def show
  end
end

