require 'rails_helper'

describe "Funny Quotes Page" do
  before do
    @quote = FactoryGirl.build(:funny)
    @quote.save
  end

  it "shows funny quote", js: true do
    visit '/#/funny'
    sleep 2
    expect(page).to have_content(@quote.body)
  end

  it "creates and updates votes", js: true do
    visit '/#/funny'
    click_link 'Vote'
    sleep 2
    expect(page).to have_content(1)
  end
end
