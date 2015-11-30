require 'rails_helper'

describe "Sad Quotes Page" do
  before do
    @quote = FactoryGirl.build(:sad)
    @quote.save
  end

  it "shows sad quote", js: true do
    visit '/#/sad'
    expect(page).to have_content(@quote.body)
  end

  it "creates and updates votes", js: true do
    visit '/#/sad'
    click_link 'Vote'
    sleep 2
    expect(page).to have_content(1)
  end
end
