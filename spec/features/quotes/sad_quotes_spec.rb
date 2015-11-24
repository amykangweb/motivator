require 'rails_helper'

describe "Sad Quotes Page" do
  before do
    @quote = FactoryGirl.build(:sad)
    @quote.save
  end

  it "shows sad quote", js: true do
    visit '/quotes'
    click_link "Sad"
    sleep 2
    expect(page).to have_content(@quote.body)
  end
end
