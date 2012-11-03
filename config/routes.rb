Rcinia::Application.routes.draw do
  root                             :to => 'home#index'
  match 'chart/sms_timeseries',    :to => 'chart#smsTimeseries'
end
